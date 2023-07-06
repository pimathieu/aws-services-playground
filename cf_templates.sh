export AWS_PROFILE=home

# create bucket if it does not exist
aws s3 mb s3://playground-configuration
aws s3 sync cf_templates s3://playground-configuration