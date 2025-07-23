<?php

namespace App\Http\Controllers;

use App\Models\User; // Importa o modelo User
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Importa a fachada Auth
use Illuminate\Support\Facades\Hash; // Importa a fachada Hash para verificar senhas
use Symfony\Component\HttpFoundation\Response; // Para códigos de resposta HTTP

class AuthController extends Controller
{
    /**
     * Lida com o processo de login do utilizador.
     * Permite login com email ou username.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // Validação dos dados de entrada
        // Requer que a 'password' esteja presente.
        // Requer que PELO MENOS UM de 'email' ou 'username' esteja presente.
        $request->validate([
            'password' => 'required|string',
            'email'    => 'required_without:username|string|email', //apenas obrigatorio caso nao seja fornecido username
            'username' => 'required_without:email|string',        
        ]);

        // Determina qual campo (email ou username) foi fornecido e qual usar para a busca
        $identifier = $request->input('email') ?? $request->input('username');
        // Se o identificador parece um email, usa 'email' como campo de busca.
        // Caso contrário, assume que é um username e usa a coluna 'name' (padrão do Laravel para username).
        $loginField = filter_var($identifier, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';

        // Tenta encontrar o utilizador pelo campo de login determinado
        $user = User::where($loginField, $identifier)->first();

        // Verifica se o utilizador existe e se a senha fornecida corresponde à senha hashada no banco de dados
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Credenciais inválidas. Verifique o email/username ou a senha.',
                'payload' => null,
            ], Response::HTTP_UNAUTHORIZED); // HTTP 401 Unauthorized
        }

        // Se a autenticação for bem-sucedida, gera um token de acesso pessoal para o utilizador
        // O nome do token pode ser qualquer coisa, ex: 'auth_token', 'access_token'
        $token = $user->createToken('auth_token')->plainTextToken;

        // Retorna a resposta de sucesso com o utilizador e o token
        return response()->json([
            'status'  => 'success',
            'message' => 'Login bem-sucedido!',
            'payload' => [
                'user'  => $user, // O utilizador autenticado
                'token' => $token, // O token de acesso
            ],
        ], Response::HTTP_OK); // HTTP 200 OK
    }

    /**
     * Lida com o processo de logout do utilizador.
     * Invalida o token atual do utilizador.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        // Revoga o token atual que está a ser usado para a requisição
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Logout bem-sucedido. Token revogado.',
            'payload' => null,
        ], Response::HTTP_OK); // HTTP 200 OK
    }

    // Você pode adicionar um método de registo (register) aqui, se necessário.
}