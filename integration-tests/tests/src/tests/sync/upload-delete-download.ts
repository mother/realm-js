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

export function itUploadsDeletesAndDownloads(): void {
  it("uploads, cleans and downloads", async function (this: RealmContext) {
    if (!this.realm) {
      throw new Error("Expected a 'realm' on the mocha context");
    }
    // Ensure everything has been uploaded
    await this.realm.syncSession.uploadAllLocalChanges();
    // Close, delete and download the Realm from the server
    this.realm.close();
    // Delete the file
    Realm.deleteFile(this.config);
    // Re-open the Realm with the old configuration
    this.realm = new Realm(this.config);
    await this.realm.syncSession.downloadAllServerChanges();
  });
}
