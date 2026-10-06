import { Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'
export const icons = { github: Github, linkedin: Linkedin, instagram: Instagram, x: Twitter, facebook: Facebook }
export const Ext = ({ href, children, className, ...p }) => <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...p}>{children}</a>
