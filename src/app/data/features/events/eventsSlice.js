"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    popularEvents: [],
    privateEvents: [],
    whatsnewEvents: [],
    allEvents: [],
    packs: [],
    error: "",
    handleBuyData: {
        loading: false,
        error: "",
        message: "",
    }
};

const fetchPrivate = createAsyncThunk(
    "events/fetchPrivate",
    async () => {
        const events = await axios.get(
            "http://16.171.170.173/events/private",
            {
                "content-type": "application/json",
            }
        );

        return events.data.data;
    }
);

const fetchAllEvents = createAsyncThunk(
    "events/fetchAllEvents",
    async () => {
        const events = await axios.get(
            "http://16.171.170.173/events",
            {
                "content-type": "application/json",
            }
        );
        return events.data.allAlbums;
    }
);

const handleBuyApi = createAsyncThunk(
    "events/handleBuy",
    async (data) => {
        const message = await axios.post(
            "http://16.171.170.173/events/buy",
            {
                "content-type": "application/json",
                data: data
            }
        );
        return message;
    }
);

const handleBuyPackApi = createAsyncThunk(
    "events/handleBuyPack",
    async (data) => {
        const message = await axios.post(
            "http://16.171.170.173/events/buyPack",
            {
                "content-type": "application/json",
                data: data
            }
        );
        return message;
    }
);

const fetchPacks = createAsyncThunk(
    "events/fetchPacks",
    async () => {
        const packs = await axios.get(
            "http://16.171.170.173/events/packs",
            {
                "content-type": "application/json",
            }
        );
        return packs.data.data;
    }
);

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPrivate.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPrivate.fulfilled, (state, action) => {
            state.loading = false;
            state.privateEvents = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPrivate.rejected, (state, action) => {
            state.loading = false;
            state.privateEvents = [];
            state.error = action.error.message;
        });
        builder.addCase(fetchAllEvents.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
            state.loading = false;
            state.allEvents = action.payload;
            state.error = "";
        });
        builder.addCase(fetchAllEvents.rejected, (state, action) => {
            state.loading = false;
            state.allEvents = [];
            state.error = action.error.message;
        });
        builder.addCase(fetchPacks.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPacks.fulfilled, (state, action) => {
            state.loading = false;
            state.packs = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPacks.rejected, (state, action) => {
            state.loading = false;
            state.packs = [];
            state.error = action.error.message;
        });
        builder.addCase(handleBuyApi.pending, (state) => {
            state.handleBuyData.loading = true;
        });
        builder.addCase(handleBuyApi.fulfilled, (state, action) => {
            state.loading = false;
            state.handleBuyData.message = action.payload;
            state.error = "";
        });
        builder.addCase(handleBuyApi.rejected, (state, action) => {
            state.handleBuyData.loading = false;
            state.handleBuyData.message = "";
            state.handleBuyData.error = action.error.message;
        });
    },
});

export { fetchAllEvents, fetchPrivate, fetchPacks, handleBuyApi, handleBuyPackApi };

export default eventsSlice.reducer;
