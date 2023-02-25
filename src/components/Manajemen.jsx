import React, {useEffect, useState} from "react";
import Tabel from "./Tabel";
import axios from "axios";


function Manajemen(){
    const [formMode, setFormMode] = useState("");
    const [shoes, setShoes] = useState([]);
    const [inputForm, setInputForm] = useState();

    function showCreateForm(){
        setInputForm("");
        setFormMode("create")
    }
    function showEditForm(sepatu){
        setInputForm(sepatu);
        setFormMode("edit");
    }

    useEffect(() => {
        retrieveData();
    }, []);

    function retrieveData(){
        axios.get("http://localhost:4000/shoes")
        .then((response) => {setShoes(response.data)})
        .catch(function (error) {console.log(error.response.data)} )
    }

    function handleNama(e) {
        setInputForm({...inputForm, nama: e.target.value})
    }

    function handleJumlah(e) {
        setInputForm({...inputForm, jumlah: e.target.value})
    }

    function handleHarga(e) {
        setInputForm({...inputForm, harga: e.target.value})
    }

    function submitForm(event){
        event.preventDefault();
        if (formMode === "create"){
            axios.post("http://localhost:4000/shoes/add", inputForm)
                .then(() => {
                    alert("data Berhasil Ditambahkan");
                    retrieveData();
                })
                .catch((error) => {console.log(error.response)})
            }
            
        if(formMode === "edit"){
            axios.put("http://localhost:4000/shoes/update/" + inputForm._id, inputForm)
                .then(() => {
                    alert("data Berhasil diubah!");
                    retrieveData();
                })
                .catch((error) => {console.log(error.response)})
            
        }
    }

    function deleteOne(sepatu){
        axios.delete("http://localhost:4000/shoes/delete/" + sepatu._id)
            .then(() => {
                retrieveData();
                alert("Data Berhasil Dihapus ! ")
            })
            .catch((error) => {console.log(error.response)})
    }


    return(
        <div className="container card ms-auto my-5 shadow">
            <h2 className="text-center pt-3">Manajemen Barang</h2>
            <div>
                <button className="btn btn-primary ms-3 mb-3" onClick={showCreateForm}>Tambah Data</button>
                
                {formMode !== "" && (
                <div id="form">
                    <div className="card-body">
                        <h4>Form Sepatu</h4>
                        <form className="row" onSubmit={submitForm}>
                            <div className="row-6 mb-3 col-10 ">
                                <label htmlFor="" className="mb-1">Nama Barang</label>
                                <input 
                                    type="text"
                                    name="nama"
                                    placeholder="Nama Barang..."
                                    className="form-control ms-auto"
                                    value={inputForm.nama || ""}
                                    onChange={handleNama}
                                    />
                            </div>
                            <div className="row-6 mb-3 col-4">
                                <label htmlFor="" className="mb-1">Jumlah Item</label>
                                <input 
                                    type="number"
                                    name="jumlah"
                                    placeholder="Jumlah Item..."
                                    onChange={handleJumlah}
                                    value={inputForm.jumlah || ""}
                                    className="form-control ms-auto " />
                            </div>
                            <div className="row-6 col-3">
                                <label htmlFor="" className="mb-1">Harga</label>
                                <input 
                                    type="number"
                                    name="harga"
                                    placeholder="Harga..."
                                    value={inputForm.harga || ""}
                                    onChange={handleHarga}
                                    className="form-control ms-auto" />
                            </div>
                            <div className="row">
                                <button type="submit" class="btn btn-primary ms-3 mb-3 col-1">Submit</button>
                            </div>
                        </form>
                    </div> 
                </div> 
                )}      
            </div>
            <Tabel showEdit={showEditForm} shoes={shoes} requestToDelete={deleteOne}/>
            
        </div>
    )
}

export default Manajemen;