export const useHelper = () => {
    
    const checkDefaultClass = (str, defaultClass) => {
        return str && str.includes('$reset') ? str.replace('$reset', '') : `${defaultClass} ${str}`
    } 

    return { checkDefaultClass }
}