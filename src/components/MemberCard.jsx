import  '../styles/base.css';

function MemberCard ({member, onToggleActive}){
    const {avatar, name, role, email, department, isActive, id} = member;
    return(
        <>
      <article className="card">
        <div>
            <div className='Avatar_circle'>
                <h2>{avatar}</h2>
            </div>
             <div className="actvity_status toggleBtn" onClick={() => onToggleActive(id)}>
                {isActive ? "Active" : "Inactive"}
             </div>
        </div>
        <h3 className= "memberName">{name}</h3>
            <p className="memberRole">{role}</p>  
            <p className="memberDepartment">{department}</p>
            <p className="memberEmail">{email}</p>   
      </article>
            </>
    )
}
export default MemberCard;