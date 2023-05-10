type handleFunction = (event: any, id: string | number | undefined) => void;

export interface CartContextType {
    cart: any[];
    isOpen: boolean;
    itemsAmount: number;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: (item: any, id: number | string | undefined) => void;
    removeFromCart: (id: string | number | undefined) => void;
    handleInput: handleFunction;
    handleSelect: handleFunction;
    total: number;
}