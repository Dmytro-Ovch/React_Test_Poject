import studentData from '../data/studentData';

const Student = () => (
  <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10">
    <img src={studentData.picture} alt="Student" className="w-full h-60 object-cover" />
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-2">
        {studentData.firstName} {studentData.lastName}
      </h2>
      <p className="text-gray-600 mb-1">Age: {studentData.age}</p>
      <p className="text-gray-600 mb-1">Course: {studentData.course}</p>
      <p className="text-gray-600">City: {studentData.city}</p>
    </div>
  </div>
);

export default Student;
