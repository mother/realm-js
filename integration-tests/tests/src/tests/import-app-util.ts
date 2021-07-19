////////////////////////////////////////////////////////////////////////////
//
// Copyright 2020 Realm Inc.
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
import { App } from "realm";
import { expect } from "chai";

import { importApp } from "../utils/import-app";

describe.skipIf(environment.missingServer, "importApp utility", function () {
  this.slow(2000);

  it("can import an app", async () => {
    const app = await importApp("simple");
    expect(app).instanceOf(App);
    expect(app.id.startsWith("simple")).equals(true);
  }).timeout(10000);

  it("throws on unexpected app names", async () => {
    let threw = false;
    try {
      await importApp("unexpected-app-name");
    } catch (err) {
      threw = true;
      expect(err.message.includes("Unexpected app name")).equals(true);
    } finally {
      expect(threw).equals(true);
    }
  });
});
