import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bscywcoscgmzgovqkabl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzY3l3Y29zY2dtemdvdnFrYWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1Mzk5NTYsImV4cCI6MjAzNTExNTk1Nn0.8bVuFoCBtaL3F9WjC7w3Hyays-sWGO5Gar1jIQSBToc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
