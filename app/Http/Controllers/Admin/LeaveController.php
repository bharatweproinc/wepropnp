<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Interfaces\LeaveInterface;
use App\Repository\LeaveRepository;

class LeaveController extends Controller
{
    private LeaveInterface $leaveRepository ;

    public function __construct(LeaveInterface $leaveRepository)
    {
       $this->leaveRepository = $leaveRepository;
    }

    public function list()
    {
        $leaves = $this->leaveRepository->getlist();
        return Inertia::render('Admin/Leave/View',['leave'=>$leaves]);
    }

    public function save(Request $request ,$id)
    {
        $this->leaveRepository->save($request->all(),$id);
        return redirect()->back();
    }
    // public function details($id)
    // {
    //     $data= $this->leaveRepository->detail($id);
    //     return redirect()->back()->with;
    // }
    public function update(Request $request,$id)
    {
        $this->leaveRepository->update($request->all(),$id);
        return redirect()->back();
    }


}