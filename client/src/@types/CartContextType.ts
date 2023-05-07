export interface CartContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: (item: any, id: number | string | undefined) => void;
    cart: any[];
    removeFromCart: (id: string | number | undefined) => void;
}