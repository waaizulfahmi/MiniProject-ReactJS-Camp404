import React from "react";

function Tabel({ showEdit, shoes, requestToDelete }) {
  function editData(sepatu) {
    showEdit(sepatu);
  }
  function deleteData(sepatu) {
    requestToDelete(sepatu);
  }
  return (
    <div>
      <h4 className="ms-3">Tabel Data Barang</h4>
      <table className="table table-hover mt-3 mb-3 ms-3 me-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Jumlah Item</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((sepatu, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{sepatu.nama}</td>
              <td>{sepatu.jumlah}</td>
              <td>Rp. {sepatu.harga.toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => editData(sepatu)}
                >
                  <i class="fa fa-pencil-square-o me-2"></i>Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteData(sepatu)}
                >
                  <i class="fa fa-close me-2"></i>Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabel;
