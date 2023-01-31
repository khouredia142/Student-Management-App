import React, { Component } from "react";
// import Header from "../../layout/Header";
// import ListStudent from "./ListeStudent";
// import Student from "./Student";
import Footer from "../../layout/Footer";

class DetailStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            students: {}
        }
    }


      render(){

        return(
            <>
           
                <div class="content container-fluid">
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3 class="page-title">Student Details</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/liste-des-etudiants">Liste des etudiants</a></li>
                                    <li class="breadcrumb-item active">Student Details</li>
                                </ul>
                              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="about-info">
                                        <h4>A propos de l'etudiant</h4>
                                        <div class="media mt-3 d-flex">
                                            <div class="media-body flex-grow-1">
                                                <ul>
                                                    <li>
                                                        <b class="title-span">Full Name : </b>
                                                        <span class="info-span"></span>
                                                    </li>
                                                    <li>
                                                        <b class="title-span">Etablissement : </b>
                                                        <span class="info-span"></span>
                                                    </li>
                                                    <li>
                                                        <b class="title-span">Mobile : </b>
                                                        <span class="info-span"></span>
                                                    </li>
                                                    <li>
                                                        <b class="title-span">Email : </b>
                                                        <span class="info-span"></span>
                                                    </li>
                                                    <li>
                                                        <b class="title-span">Classe : </b>
                                                        <span class="info-span"></span>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                < Footer/>
              
            </>
        )
    }
}

export default DetailStudent;
           
           