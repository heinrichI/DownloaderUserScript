export function LogMethodDecorator(
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor)
{
    const originalCode = descriptor.value;

    descriptor.value = function()
    {
        console.log(`DownloaderUserScript. Invoked ${String(key)} providing:`, arguments);
        return originalCode.apply(this, arguments);
    }
    return descriptor;
}