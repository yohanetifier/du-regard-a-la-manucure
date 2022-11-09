import { useState, useEffect } from "react";

const useIntersection = (element: any, threshold: number) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(entry.isIntersecting);
                }
            }, { threshold }
        );
        element.current && observer.observe(element.current);
        return () => observer.unobserve(element.current)
    }, [])

    return isVisible;
}

export default useIntersection; 