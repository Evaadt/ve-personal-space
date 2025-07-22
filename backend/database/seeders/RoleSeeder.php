<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // Para interagir com o banco de dados
use Illuminate\Support\Facades\Hash; // Para encriptar senhas de utilizadores

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Chama as funções em ordem: primeiro as roles, depois os utilizadores
        $this->createRoles();
        $this->createUsers();
    }

    /**
     * Cria e insere as roles no banco de dados.
     */
    private function createRoles(): void
    {
        // Limpa a tabela 'roles' antes de inserir para evitar duplicatas
        // CUIDADO: Isso apaga todos os dados existentes na tabela 'roles'
        // DB::table('roles')->truncate();

        DB::table('roles')->insert([
            [
                'name' => 'administrador',
                'description' => 'Usuário com acesso BO e FO, com limitações.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'self-desk',
                'description' => 'Usuário com acesso total ao sistema.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'user-comum',
                'description' => 'Usuário padrão com acesso limitado.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        $this->command->info('Roles (administrador, user-comum) criadas com sucesso!');
    }

    /**
     * Cria e insere os utilizadores no banco de dados, associando-os às roles.
     */
    private function createUsers(): void
    {
        // Limpa a tabela 'users' antes de inserir para evitar duplicatas
        // CUIDADO: Isso apaga todos os dados existentes na tabela 'users'
        // DB::table('users')->truncate();

        // Obtém os IDs das roles que acabamos de criar
        $selfDesk = DB::table('roles')->where('name', 'self-desk')->value('id');
        $adminRoleId = DB::table('roles')->where('name', 'administrador')->value('id');
        $userComumRoleId = DB::table('roles')->where('name', 'user-comum')->value('id');

        DB::table('users')->insert([
            [
                'name' => 'admin-dev',
                'email' => 'admin.dev@example.com',
                'password' => Hash::make('password'), // Use uma senha segura em produção!
                'role_id' => $selfDesk, // Associa à role de administrador
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'administrador',
                'email' => 'administrador@example.com',
                'password' => Hash::make('password'), // Use uma senha segura em produção!
                'role_id' => $adminRoleId, // Associa à role de administrador
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'utilizador-um',
                'email' => 'utilizador.um@example.com',
                'password' => Hash::make('password'), // Use uma senha segura em produção!
                'role_id' => $userComumRoleId, // Associa à role de utilizador-comum
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        $this->command->info('Utilizadores (admin-dev, administrador, utilizador-um) criados com sucesso!');
    }
}
