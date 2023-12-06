<?php

namespace App\Interfaces;

interface TaskInterface
{
    public function getlist($id);
    public function create($id);
    public function save($id,$data);
    public function edit($id);
    public function update($id,$data);
    public function detail($id);

}
