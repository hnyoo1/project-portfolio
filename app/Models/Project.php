<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    // Columns that are allowed to be saved/updated
    protected $fillable = [
        'title',
        'description',
        'image',
        'github_url',
        'live_url',
        'tech_stack',
        'is_featured',
    ];
}
