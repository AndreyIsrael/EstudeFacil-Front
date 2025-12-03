import React from "react"

export type ButtonSize = "sm" | "md" | "lg"
export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSize
	variant?: ButtonVariant
	className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ size = "md", variant = "primary", className = "", children, ...props }, ref) => {
		const sizeClasses =
			size === "lg" ? "px-8 py-6 text-base" : size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2"

		const variantClasses =
			variant === "secondary"
				? "bg-gray-700 hover:bg-gray-600"
				: variant === "ghost"
				? "bg-transparent"
				: variant === "outline"
				? "border border-white bg-transparent text-white hover:bg-white/10"
				: "bg-blue-600 hover:bg-blue-700"

		const base = "inline-flex items-center justify-center rounded-md font-medium"

		return (
			<button ref={ref} className={`${base} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
				{children}
			</button>
		)
	}
)

Button.displayName = "Button"

export default Button
