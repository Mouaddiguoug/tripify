"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    popularEvents: [],
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

const fetchPopularEventsData = createAsyncThunk(
    "events/fetchPopularEventsData",
    async () => {
        const events = await axios.get(
            "http://13.51.169.120:8000/events/popular",
            {
                "content-type": "application/json",
            }
        );
        return events.data.popularPosts;
    }
);

const fetchAllEvents = createAsyncThunk(
    "events/fetchAllEvents",
    async () => {
        const events = await axios.get(
            "http://13.51.169.120:8000/events",
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
            "http://13.51.169.120:8000/events/buy",
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
            "http://13.51.169.120:8000/events/buyPack",
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
            "http://13.51.169.120:8000/events/packs",
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
        builder.addCase(fetchPopularEventsData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPopularEventsData.fulfilled, (state, action) => {
            state.loading = false;
            state.popularEvents = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPopularEventsData.rejected, (state, action) => {
            state.loading = false;
            state.popularEvents = [];
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

export { fetchPopularEventsData, fetchAllEvents, fetchPacks, handleBuyApi, handleBuyPackApi };

export default eventsSlice.reducer;
