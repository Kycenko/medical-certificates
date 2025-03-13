type OrderByParams = {
	orderBy: 'asc' | 'desc'
}

export type DepartmentParams = {
	title?: string
} & OrderByParams

export type CourseParams = {
	departmentTitle?: string
} & OrderByParams

export type GroupParams = {
	title?: string
	departmentTitle?: string
} & OrderByParams

export type HealthGroupParams = {
	title?: string
} & OrderByParams

export type PhysicalEducationParams = {
	title?: string
} & OrderByParams
