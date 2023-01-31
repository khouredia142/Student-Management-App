import React, { useState } from 'react';
// import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import Student from './Student';
// import AjoutStudent from './AjoutStudent';
import { useForm } from 'react-hook-form'
import '../../assets/css/style.css'
import '../../assets/vendor/chartist/css/chartist.min.css'
import '../../assets/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'
import '../../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css'
// import Footer from '../../layout/Footer';

import Modal from 'react-bootstrap/Modal';
import EditStudent from './edit';



function ListStudent() {

  let [students, setstudents] = useState(
    [
      { id: 1, nom: " Diawara", prenom: "Adja khouredia", dateNais: "07-07-0007", classe: "second S", tel: "77-000-00-00" },
      { id: 2, nom: " Ndiaye", prenom: "Alpapie", dateNais: "07-07-0007", classe: "Terminal S", tel: "77-000-00-00" }
      
    ],

  )
 ;
 let [student, setstudent] = useState(null)
  const [IsOpen, setIsOpen] = useState(false);
  const [IsOpenmodif, setIsOpenmodif] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: students.length + 1
    }
  })
  
  function handleDelete(id) {
    setstudents(students.filter(
      student => student.id !== id
    ))

  }
  function editStudent(id){
    setstudent(students[id -1])
    setIsOpenmodif(true)
    // setstudents(students.filter(
    //   student => student.id = id
    // ))
  }


  const handleAdddata = (values) => {
    console.log(values)
    //  <div class="alert alert-success" role="alert">This is a success alert — check it out!</div>
    alert("l'etudiant a ete enrigistrer avec succes")


    setstudents([...students, values]);
    reset()
    setIsOpen(false);
    // setshowform(false)
  }
  let learners = students;
  if (!learners.length) {
    return (
      <div>

        <h1>Listes des etudiants de</h1>
        <p>Aucun etudiant</p>

      </div>
    )
  }
  const handleCloseform = () => {
    setIsOpen(false)
  }
  function formdata() {
    setIsOpen(true)
  }
  return ( 
    <>
      <Header />
      <br></br>
      
        <Modal show={IsOpen} onHide={handleCloseform}>
          {/* <Modal.Header  >
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <form onSubmit={handleSubmit(handleAdddata)} method="post" action=''>
              <div class="form-group">
                <label class="text-black font-w500">Nom</label>
                <input type="text" class="form-control"  {...register("nom", { required: true })} />
              </div>
              <div class="form-group">
                <label class="text-black font-w500">Prenom</label>
                <input type="text" class="form-control" {...register("prenom", { required: true })} />
              </div>
              <div class="form-group">
                <label class="text-black font-w500">Date de Naissance</label>
                <input type="text" class="form-control"  {...register("dateNais", { required: true })} />
              </div>
              <div class="form-group">
                <label class="text-black font-w500">Classe</label>
                <input type="text" class="form-control"  {...register("classe", { required: true })} />
              </div>
              <div class="form-group">
                <label class="text-black font-w500">Contact</label>
                <input type="text" class="form-control"  {...register("tel", { required: true })} />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary mr-5">Enrigistrer</button>

                <closeButton class="btn btn-primary" onClick={handleCloseform} >Annuler</closeButton>


              </div>
            </form>
          </Modal.Body>
        </Modal>
        {
          IsOpenmodif ?
          <EditStudent setIsOpenmodif={setIsOpenmodif} IsOpenmodif={IsOpenmodif} student={student} setstudents={setstudents} students={students}/>
          :null
        }
        <div className='text-end mr-left-5'>
          <i style={{cursor:"pointer"}} class="btn btn-primary btn-rounded mb-3" onClick={formdata}>
            <i class="fa fa-user-plus mr-3"></i>Nouveau Etudiant</i>
        </div>

        <div class="row">
          <div class="col-xl-12">
            <div class="table-responsive ">
              <table class="table table-responsive-lg mb-4 dataTablesCard card-table text-black" id="example5">
                <thead>
                  <tr>
                    <th>
                      <div class="checkbox mr-0 align-self-center">
                        <div class="custom-control custom-checkbox ">
                          <input type="checkbox" class="custom-control-input" id="checkAll" required="" />
                          <label class="custom-control-label" for="checkAll"></label>
                        </div>
                      </div>
                    </th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Date de Naissance</th>
                    <th>Classe</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {

                    learners.map((learner) =>
                      <Student
                        key={learner.id}
                        learner={learner}
                        handleDelete={handleDelete}
                        editStudent={editStudent}
                      />
                    )

                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
    </>
  )

}

export default ListStudent;