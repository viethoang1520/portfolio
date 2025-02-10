import('./SkillCard.scss')
import { Icon } from '@iconify/react'
function SkillCard({ name, exp, icon }) {
  return (
    <div className="card">
      <div className="icon-block">
        <Icon icon={icon} className='skill-icon' />
      </div>
      <h1 className="content skill-name">{name}</h1>
      <h5 className="content skill-desc">{exp}</h5>
    </div>
  );
}

export default SkillCard;