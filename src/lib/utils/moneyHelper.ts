import type { Invoice, LineItems } from "../../global"

export const sumLineItems = (lineItems: LineItems[] | undefined): number => {
  if (!lineItems) {
    return 0
  }

  return lineItems.reduce((prev, curr) => prev + curr.amount, 0)
}

export const formatCurrency = (amount: number) => {
  const decimalValue = twoDecimals(amount)
  return addThousandsSeparator(decimalValue)
}

export const twoDecimals = (num: number): string => {
  return num.toFixed(2)
}

export const addThousandsSeparator = (amount: string): string => {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const sumInvoices = (invoices: Invoice[] | undefined): number => {
  if (!invoices) return 0
  return invoices.reduce((prevValue, curValue) => {
    const invoiceSum = sumLineItems(curValue.lineItems);
    return prevValue + invoiceSum;
  }, 0)
}