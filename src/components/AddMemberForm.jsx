
  import { useState } from "react";
  
  export default function AddMemberForm({onAddMember}){
    // Each field is a controlled input driven by its own state
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
  
    function handleSubmit(e) {
      // Prevent the default browser form submission (page refresh)
      e.preventDefault();
  
      // Basic validation — don't submit if required fields are empty
      if (!name.trim() || !role.trim() || !department.trim()) return;
  
      // Build the new member object
      const newMember = {
        id: Date.now(), // simple unique id using timestamp
        name,
        role,
        department,
        email,
        avatar: name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
        isActive: true,
      };
        // Pass the new member UP to the parent (App) via the prop function
    onAddMember(newMember);

    // Reset all form fields back to empty — controlled inputs make this easy
    setName("");
    setRole("");
    setDepartment("");
    setEmail("");
  }

  return (
  
    <div>
      <h2>Add New Member</h2>

      <form onSubmit={handleSubmit}>

       
        <input
    
          type="text"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
    
          type="text"
          placeholder="Role *"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          
          type="text"
          placeholder="Department *"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Add Member
        </button>
      </form>
    </div>
  );
}
