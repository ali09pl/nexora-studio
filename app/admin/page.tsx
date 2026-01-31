import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [visits, setVisits] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    // مثال: تجيب البيانات من API
    setVisits(1234);
    setUsers(56);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">لوحة تحكم المسؤول</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold">عدد الزوار</h2>
          <p className="text-xl">{visits}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold">عدد المستخدمين</h2>
          <p className="text-xl">{users}</p>
        </div>
      </div>
      <div className="mt-8">
        <p>المحتوى قابل للتوسيع: CRUD المشاريع، سجل النشاط، إدارة النصوص، ...</p>
      </div>
    </div>
  );
}
