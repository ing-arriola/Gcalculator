export interface CalculatorButton{
    title:string;
    background?: '#9b9b9b' | '#FF9427' | '#2D2D2D';
    wider?:boolean;
    action: (value:string) => void;
}