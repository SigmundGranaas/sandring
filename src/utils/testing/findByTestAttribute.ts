
export const findByTestAttribute = (component: any, attribute:any) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}
