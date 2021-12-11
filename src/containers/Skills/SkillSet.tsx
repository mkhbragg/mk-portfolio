import React, { FC } from 'react'

import { ThemedComponent } from '../../interfaces'
import { Skill } from './interfaces'
import { SkillMeasure } from './SkillMeasure'

interface Props extends ThemedComponent {
  skills: Skill[]
}

export const SkillSet: FC<Props> = ({ skills, ...rest }) => {
  return (
    <>
      {skills.map((skill: Skill) => (
        <SkillMeasure skill={skill} {...rest} />
      ))}
    </>
  )
}
