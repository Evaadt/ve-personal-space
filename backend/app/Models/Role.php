<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    // Define quais colunas podem ser preenchidas via atribuição em massa
    protected $fillable = ['name', 'description'];

    /**
     * Obtenha os utilizadores que pertencem a esta função.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}