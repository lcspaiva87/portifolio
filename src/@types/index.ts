export interface SkillsProps {
    skill: Skill[];
}

export interface Skill {
    id:    number;
    name:  string;
    image: string;
    color: string;
}


export interface ProjectsProps {
    project: Project[];
}

export interface Project {
    id:          string;
    title:       string;
    url:         string;
    type:        string;
    dirName:     string;
    github:      string;
    description: string;
    tag:         Tag[];
}

export interface Tag {
    value: string;
}

export interface WorkProps{
    id?:          number;
    company?:     string;
    office?:      string;
    description?: string;
    dateStart?:   string;
    dateEnd?:     string;
    monthStart?:  string;
    monthEnd?:    string;
}
