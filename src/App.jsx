import Header from './components/header';
import MemberCard from './components/MemberCard';
import {membersData} from './components/membersData';
import { useState } from 'react';
import AddMemberForm from './components/AddMemberForm';

export default function App(){
  const [members, setMembers] = useState(membersData);


   function handleToggleActive(id) {
    setMembers(prev =>
      prev.map(m => m.id === id ? { ...m, isActive: !m.isActive } : m)
    );
  }
  return(
    <>
    <Header />
    <AddMemberForm onAddMember={(newMember) => setMembers([...members, newMember])} />
    {members.map(member => (
      <MemberCard key={member.id} member={member} onToggleActive={handleToggleActive} />
    ))}
    </>
  )
}