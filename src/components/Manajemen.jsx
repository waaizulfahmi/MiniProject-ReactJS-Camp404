import React, { useEffect, useState } from "react";
import Tabel from "./Tabel";
import axios from "axios";

function Manajemen() {
  const [formMode, setFormMode] = useState("");
  const [shoes, setShoes] = useState([]);
  const [inputForm, setInputForm] = useState();

  function showCreateForm() {
    setInputForm("");
    setFormMode("create");
  }
  function showEditForm(sepatu) {
    setInputForm(sepatu);
    setFormMode("edit");
  }

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/shoes")
      .then((response) => {
        setShoes(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  function handleNama(e) {
    setInputForm({ ...inputForm, nama: e.target.value });
  }

  function handleJumlah(e) {
    setInputForm({ ...inputForm, jumlah: e.target.value });
  }

  function handleHarga(e) {
    setInputForm({ ...inputForm, harga: e.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    if (formMode === "create") {
      axios
        .post("http://localhost:4000/shoes/add", inputForm)
        .then(() => {
          alert("data Berhasil Ditambahkan");
          retrieveData();
          event.preventDefault();
        })
        .catch((error) => {
          console.log(error.response);
        });
    }

    if (formMode === "edit") {
      axios
        .put("http://localhost:4000/shoes/update/" + inputForm._id, inputForm)
        .then(() => {
          alert("data Berhasil diubah!");
          retrieveData();
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }

  function deleteOne(sepatu) {
    axios
      .delete("http://localhost:4000/shoes/delete/" + sepatu._id)
      .then(() => {
        retrieveData();
        alert("Data Berhasil Dihapus ! ");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className="container card ms-auto my-4 shadow">
      <h2 className=" pt-3 text-black mb-5">Manajemen Barang</h2>
      <div>
        <div className="col-2">
          <button
            className="btn btn-success ms-3 mb-3 ms-auto"
            onClick={showCreateForm}
          >
            <i className="fa fa-plus me-1"></i>Tambah Data
          </button>
        </div>
        {formMode !== "" && (
          <div id="form">
            <div className="card-body">
              <h4 className="text-black mb-5">Form Sepatu</h4>
              <form className="row" onSubmit={submitForm}>
                <div className="row-6 mb-3 col-10 ">
                  <label htmlFor="" className="mb-1 text-black col-form-label ">
                    Nama Barang
                  </label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama Barang..."
                    className="form-control ms-auto"
                    value={inputForm.nama || ""}
                    onChange={handleNama}
                  />
                </div>
                <div className="row-6 mb-5 col-4">
                  <label htmlFor="" className="mb-1  text-black">
                    Jumlah Item
                  </label>
                  <input
                    type="number"
                    name="jumlah"
                    placeholder="Jumlah Item..."
                    onChange={handleJumlah}
                    value={inputForm.jumlah || ""}
                    className="form-control ms-auto "
                  />
                </div>
                <div className="row-6 col-3">
                  <label htmlFor="" className="mb-1  text-black">
                    Harga
                  </label>
                  <input
                    type="number"
                    name="harga"
                    placeholder="Harga..."
                    value={inputForm.harga || ""}
                    onChange={handleHarga}
                    className="form-control ms-auto"
                  />
                </div>
                <div className="row">
                  <button type="submit" class="btn btn-primary ms-3 mb-3 col-2">
                    <i className="fa fa-floppy-o me-2"></i>Simpan Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Tabel
        showEdit={showEditForm}
        shoes={shoes}
        requestToDelete={deleteOne}
      />
    </div>
  );
}

export default Manajemen;
