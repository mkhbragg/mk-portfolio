import React, { FC, useMemo } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { ThemedComponent } from '../../interfaces'
import { SkillLevel } from './enums'
import { Skill } from './interfaces'

interface Props extends ThemedComponent {
  skill: Skill
}

export const SkillMeasure: FC<Props> = ({ skill, themeName }) => {
  const tooltipContent = useMemo(() => {
    switch (skill.level) {
      case SkillLevel.INTERMEDIATE:
        return 'Feel pretty good but not enough to sell myself'
      case SkillLevel.ADVANCED:
        return "I'm comfy but there's always room to grow 😉"
      case SkillLevel.NOVICE:
        return "I've used this for some projects"
      case SkillLevel.NOOB:
      default:
        return "I've just begun learning"
    }
  }, [skill.level])

  const subtitle = useMemo(() => {
    switch (skill.level) {
      case SkillLevel.INTERMEDIATE:
        return 'INTERMEDIATE'
      case SkillLevel.ADVANCED:
        return 'ADVANCED'
      case SkillLevel.NOVICE:
        return 'NOVICE'
      case SkillLevel.NOOB:
      default:
        return 'NOOB'
    }
  }, [skill.level])

  return (
    <div className="SkillMeasure">
      <div className="TitleContainer">
        <h4 className="Title">{skill.label}</h4>
        <h6 className="Subtitle">{subtitle}</h6>
      </div>
      <Tippy content={tooltipContent}>
        <div className="SkillContainer">
          <div
            className="Level"
            style={{
              width: `${skill.level}%`,
              background:
                themeName === 'dark-theme' ? skill.colorDark : skill.colorLight,
            }}
          ></div>
        </div>
      </Tippy>
    </div>
  )
}
