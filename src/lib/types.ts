import { LucideProps } from "lucide-react"

export declare type SidebarProps = {
    items: SidebarItem[]
}
export declare type SidebarItem ={
    title: string,
    url: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
}