<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User\UsersModel;

class UsersController extends Controller
{
    public function getAllUsers() {
        return response()-> json(UsersModel::get(), 200);
    }

    public function getOneUser($id) {
        $user = response()->json(UsersModel::find($id), 200);
        return response()->json(UsersModel::find($id), 200);
    }

    public function index(Request $request){
        $id = $request->query('id');
        if (isset($id)) {

           return $this->getOneUser($id);
        } else {
            return $this->getAllUsers();
        }
    }

    public function addUser(Request $request) {
        if(isset($request['password'])){
            $password = $request->password; 
            $password = md5($password);
            $request["password"] = "$password";
            $addUser = UsersModel::create($request->all());
            return response()->json($request['login'], 201); 
        } else {

            return response()->json(["error" => "Введите пароль"], 406);
        };
    }

    public function updateUser(Request $request, UsersModel $id) {
        $id->update($request->all() );
        return response()->json(["response" => 'success'], 200);  
    }

    // TODO: функция для проверки авторизован пользователь или нет

    // TODO: написать функцию для авторизации пользователя, в дальнейшем изменение данных если пользователь авторизован





    // public function getGridValue(Request $request){
    //     // returns "Foo"
    //     $object = $request->query('object');

    //     // returns "Bar"
    //     $value = $request->query('value');

    //     // returns array of entire input query...can now use $query['value'], etc. to access data
    //     $query = $request->all();

    //     // Or to keep business logic out of controller, I use like:
    //     $n = new MyClass($request->all());
    //     $n->doSomething();
    //     $n->etc();
    // }

  

}


