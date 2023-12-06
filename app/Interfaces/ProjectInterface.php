<?php

namespace App\Interfaces;

interface ProjectInterface
{
    public function getlist();
    public function save($data);
    public function edit($id);
    public function update($id,$data);
    public function detail($id);
}
