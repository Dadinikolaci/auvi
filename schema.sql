-- Create the projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  video_title TEXT,
  video_url TEXT,
  status TEXT DEFAULT 'In Review',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create the comments table
CREATE TABLE comments (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  timestamp REAL, -- Storing timestamp as a float (e.g., 62.5 seconds)
  author_email TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create the annotations table
CREATE TABLE annotations (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  timestamp REAL,
  annotation_data JSONB NOT NULL, -- Storing fabric.js object data
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE annotations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for the 'projects' table
CREATE POLICY "Users can view their own projects."
  ON projects FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own projects."
  ON projects FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own projects."
  ON projects FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own projects."
  ON projects FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for the 'comments' table
-- Assuming if a user can see a project, they can see all comments on it.
CREATE POLICY "Users can view comments for projects they have access to."
  ON comments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = comments.project_id AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert comments on projects they have access to."
  ON comments FOR INSERT
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = comments.project_id AND projects.user_id = auth.uid()
    )
  );

-- RLS Policies for the 'annotations' table
CREATE POLICY "Users can view annotations for projects they have access to."
  ON annotations FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = annotations.project_id AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert annotations on projects they have access to."
  ON annotations FOR INSERT
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = annotations.project_id AND projects.user_id = auth.uid()
    )
  );
