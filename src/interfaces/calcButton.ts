export interface CalculatorButton{
    title:string;
    background?: 'green' | 'white';
    wider?:boolean;
    action: (value:string) => void;
}