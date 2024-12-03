import React from 'react'; 
 
const OtpPage = () => { 
  return ( 
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '768px', margin: '0 auto', textAlign: 'center', padding: '20px' }}> 
      {/* Logo Tiketku */} 
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}> 
        <div style={{ textAlign: 'left' }}> 
          <img src="path-to-logo/tiketku-logo.png" alt="Tiketku" style={{ height: '40px' }} /> 
        </div> 
      </header> 
 
      {/* Masukkan OTP */} 
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Masukkan OTP</h1> 
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}> 
        Ketik 6 digit kode yang dikirimkan ke <b>J*****@gmail.com</b> 
      </p> 
 
      {/* Input OTP */} 
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}> 
        {[...Array(6)].map((_, index) => ( 
          <input 
            key={index} 
            type="text" 
            maxLength="1" 
            style={{ 
              width: '40px', 
              height: '40px', 
              margin: '0 5px', 
              fontSize: '20px', 
              textAlign: 'center', 
              border: '1px solid #ccc', 
              borderRadius: '5px', 
            }} 
          /> 
        ))} 
      </div> 
 
      {/* Timer */} 
      <p style={{ fontSize: '14px', color: '#666' }}>Kirim Ulang OTP dalam 60 detik</p> 
 
      {/* Tombol Simpan */} 
      <button 
        style={{ 
          backgroundColor: '#6C63FF', 
          color: 'white', 
          fontSize: '16px', 
          fontWeight: 'bold', 
          border: 'none', 
          borderRadius: '8px', 
          padding: '10px 20px', 
          cursor: 'pointer', 
          marginTop: '20px', 
        }} 
      > 
        Simpan 
      </button> 
 
      {/* Pesan Registrasi Berhasil */} 
      <div 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#28A745', 
          color: 'white', 
          fontSize: '14px', 
          fontWeight: 'bold', 
          borderRadius: '8px', 
        }} 
      > 
        Registrasi berhasil 
      </div> 
    </div> 
  ); 
}; 
 
export default OtpPage;