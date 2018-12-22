namespace SuperA.Core
{
    public enum TagType
    {
        Service,
        City
    }

    public class Tag
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public TagType Type { get; set; }
    }
}