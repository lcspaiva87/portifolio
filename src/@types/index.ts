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
    project: Projects[];
}

export interface Projects {
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
