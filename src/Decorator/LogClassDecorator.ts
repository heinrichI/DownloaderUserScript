export function LogClassDecorator()
{
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        console.log(`Calling ${propertyKey}`);
    }
}