<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response; // Importa a classe Response para usar códigos HTTP

class RoleController extends Controller
{
    /**
     * Retorna uma lista de todas as roles com uma estrutura de resposta padronizada.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $roles = Role::all(); // Pega todas as roles do banco de dados

            return response()->json([
                'status'  => 'success',
                'message' => 'Lista de roles obtida com sucesso.',
                'payload' => $roles,
            ], Response::HTTP_OK); // HTTP 200 OK

        } catch (\Exception $e) {
            // Em caso de erro, retorna uma resposta padronizada de erro
            return response()->json([
                'status'  => 'error',
                'message' => 'Ocorreu um erro ao obter a lista de roles.',
                'payload' => null, // Nenhum dado em caso de erro
                'error'   => $e->getMessage(), // Opcional: para depuração
            ], Response::HTTP_INTERNAL_SERVER_ERROR); // HTTP 500 Internal Server Error
        }
    }

    // Você pode adicionar outros métodos como show(id), store(), update(), destroy() aqui
}