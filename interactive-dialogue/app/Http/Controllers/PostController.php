<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function addPost(Request $request)
    {
        $post = Post::query()->create(['title' => $request->title]);

        return back()->with(['post' => $post]);
    }
}
