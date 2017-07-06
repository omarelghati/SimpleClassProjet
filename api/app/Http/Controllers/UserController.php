<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class UserController extends Controller
{
    public function singup(Request $request) {
    // 	$this->validate($request, [
    // 			'username' => 'required|unique:users',
    // 			'email' => 'required|email|unique:users',
    // 			'password' => 'required'
    // 		]);

    // 	$user = new User([
    // 			'username' => $request->input('username'),
    // 			'email' => $request->input('email'),
    // 			'password' => bcrypt($request->input('password'))
    // 		]);
    // 	$user->save();

    // 	return response()->json([
    // 			'message' => 'User created'
    // 		], 201);
    // }

    // public function signin(Request $request) {
    // 	$this->validate($request, [
    // 			'username' => 'required',
    // 			'password' => 'required'
    // 		]);

    // 	$credentials = $request->only('username', 'password');

    // 	try{
    // 		if ( !$token = JWTAuth::attempt($credentials)) {
    // 			return response()->json([
    // 					'message' => 'Invalid credentials'
    // 				] ,401);
    // 		}
    // 	} catch (JWTException $e) {
    // 		return response()->json([
    // 				'message' => 'Could not create token'
    // 			],500);
    // 	}		
    // 	return response()->json(compact('token'), 200);

    }
}
