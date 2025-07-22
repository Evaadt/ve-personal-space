<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response; // Importa a classe Response para usar códigos HTTP

class UserController extends Controller
{
    /**
     * Retorna uma lista de todos os utilizadores com uma estrutura de resposta padronizada.
     * Eager loads a relação 'role' para incluir os dados da função.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            // Pega todos os utilizadores e "carrega ansiosamente" (eager load) a relação 'role'
            $users = User::with('role')->get();

            return response()->json([
                'status'  => 'success',
                'message' => 'Lista de utilizadores obtida com sucesso.',
                'payload' => $users,
            ], Response::HTTP_OK); // HTTP 200 OK

        } catch (\Exception $e) {
            // Em caso de erro, retorna uma resposta padronizada de erro
            return response()->json([
                'status'  => 'error',
                'message' => 'Ocorreu um erro ao obter a lista de utilizadores.',
                'payload' => null, // Nenhum dado em caso de erro
                'error'   => $e->getMessage(), // Opcional: para depuração
            ], Response::HTTP_INTERNAL_SERVER_ERROR); // HTTP 500 Internal Server Error
        }
    }

    // Você pode adicionar outros métodos como show(id), store(), update(), destroy() aqui
}