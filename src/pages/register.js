import { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ที่นี่คุณสามารถทำการส่งข้อมูลไปยัง API หรือประมวลผลข้อมูลที่คุณต้องการ
    console.log({ firstName, lastName, studentId, faculty, major, phone });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อ: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>สกุล: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>รหัสนักศึกษา: </label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>คณะ: </label>
          <input
            type="text"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            required
          />
        </div>
        <div>
          <label>สาขา: </label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>เบอร์โทร: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default Register;