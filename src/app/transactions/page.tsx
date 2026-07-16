'use client';
import { useState } from "react";
import { recentTransactions } from "@/data/mockData";



export default function TransactionsPage(){
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    let transactions = recentTransactions;

    if(search){
        transactions = transactions.filter(txs => txs.status.toLowerCase() === search.toLowerCase())
    }
    if(sort === "ascending"){
        transactions = [...transactions].sort((a, b) => a.amount - b.amount)
    } else if(sort === "descending"){
        transactions = [...transactions].sort((a, b) => b.amount - a.amount);
    }

    return (
        <div className="px-2 md:px-0">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-green-900">Transactions</h1>
                <p className="text-gray-400 mt-1">{transactions.length} transactions found</p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col gap-3 mb-5 lg:flex-row lg:items-center">
                <input
                    type="text"
                    name="search"
                    value={search}
                    placeholder="Filter by status (completed, pending, failed)"
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-green-900 text-white placeholder:text-green-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full lg:w-48 bg-white text-green-900 p-2 h-10 rounded-lg border border-gray-200 focus:outline-none"
                    name="amount"
                >
                    <option value="">Sort by Amount</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                {(sort || search) && (
                    <button
                        onClick={() => { setSort(""); setSearch(""); }}
                        className="text-red-500 hover:text-red-700 text-sm transition-colors w-fit"
                    >
                        ✕ Clear
                    </button>
                )}
            </div>

            {/* Table — overflow-x-auto makes it scrollable on mobile */}
            <div className="bg-white border rounded-lg p-3 overflow-x-auto">
                <h2 className="bg-green-800 text-white p-2 rounded-xl font-semibold mb-4">
                    Recent Transactions
                </h2>
                <table className="w-full min-w-[500px]">
                    <thead>
                        <tr className="text-gray-600 text-xs md:text-sm border-b border-gray-300">
                            <th className="text-left pb-3">Name</th>
                            <th className="text-left pb-3 hidden md:table-cell">Email</th>
                            <th className="text-left pb-3">Amount</th>
                            <th className="text-left pb-3">Status</th>
                            <th className="text-left pb-3 hidden md:table-cell">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="border-b border-gray-300 text-xs md:text-sm">
                                <td className="py-3 text-green-700">{tx.name.split(" ")[0]}</td>
                                <td className="py-3 text-gray-400 hidden md:table-cell">
                                    {tx.email}
                                </td>
                                <td className="py-3 text-green-700">₦{tx.amount.toLocaleString()}</td>
                                <td className="py-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        tx.status === "completed" ? "bg-green-900 text-green-400" :
                                        tx.status === "pending" ? "bg-yellow-900 text-yellow-400" :
                                        "bg-red-900 text-red-400"
                                    }`}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="py-3 text-gray-400 hidden md:table-cell">{tx.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}