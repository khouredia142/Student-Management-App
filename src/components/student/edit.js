import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from "react-router-dom";
//import {v4 as uuid} from "uuid";
// import Student from "./Student";

function EditStudent({ setIsOpenmodif, IsOpenmodif,student ,students,setstudents}) {
  // const [id, setId] = useState("");
  //   const [nom, setNom] = useState("");
  //   const [prenom, setPrenom] = useState("");
  //   const [dateNais, setDateNais] = useState("");
  //   const [tel, setTel] = useState("");
  //   const [classe, setClasse] = useState("");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: student
  })
  const handleCloseform = () => {
    setIsOpenmodif(false)
  }
  function onsubmodif(data){
    console.log(data)
    students[data.id-1]=data
    setstudents(students)
    setIsOpenmodif(false)
    reset()
  }
  return (

    //   <div
    //   className="modal show"
    //   style={{ display: 'block', position: 'initial' }}
    // >

    <Modal onHide={handleCloseform} show={IsOpenmodif}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier un etudiant</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onsubmodif)} method="post" action=''>
          <div className="mb-3">
          <input type="text" class="form-control" placeholder="Nom" hidden="true" {...register('id')} ></input>
            <input type="text" class="form-control" placeholder="Nom" {...register('nom')} ></input>
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Prenom" {...register('prenom')}  />
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="dateNais"  {...register('dateNais')} ></input>
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Mobile" {...register('tel')} />
          </div>
          <div className="mb-3">
            <input type="text" class="form-control" placeholder="Classe" {...register('classe')} ></input>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg  " type="submit" >Mise-a-jour</button>
            <button className="btn btn-primary btn-lg  ml-3"onClick={handleCloseform}>Annuler</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>

  )
}
export default EditStudent;