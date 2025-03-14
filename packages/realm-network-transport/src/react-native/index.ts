////////////////////////////////////////////////////////////////////////////
//
// Copyright 2021 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

export * from "../index";

import { DefaultNetworkTransport } from "../DefaultNetworkTransport";
import { AbortController, Fetch } from "../types";

const globalThisOrWindow = typeof globalThis === "object" ? globalThis : window;

DefaultNetworkTransport.fetch = globalThisOrWindow.fetch.bind(globalThisOrWindow) as Fetch;
DefaultNetworkTransport.AbortController = globalThisOrWindow.AbortController.bind(
  globalThisOrWindow,
) as AbortController;

// Setting this non-standard option to enable text streaming
// See https://github.com/react-native-community/fetch#enable-text-streaming
DefaultNetworkTransport.extraFetchOptions = {
  reactNative: { textStreaming: true },
};
